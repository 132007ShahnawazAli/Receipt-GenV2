"use client"

import { useState, useEffect } from "react"
import { getEnabledTemplates } from "@/lib/templates"

/**
 * Custom hook to get available brands with templates
 * @returns {Array} Array of available brands
 */
export function useAvailableBrands() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchTemplates() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/templates?enabled=true');
        
        if (!res.ok) {
          throw new Error(`Failed to fetch templates: ${res.status} ${res.statusText}`);
        }
        
        const templates = await res.json();
        
        if (!isMounted) return;
        
        // Map templates to brand format
        const brandTemplates = (templates || []).map(tpl => ({
          _id: tpl._id,
          id: tpl._id, // Use MongoDB _id as the ID
          name: tpl.name,
          slug: tpl.slug || tpl.name.toLowerCase().replace(/\s+/g, '-'),
          displayName: tpl.name,
          logo: tpl.logo || '/placeholder-logo.png',
          description: tpl.description,
          // Include any template-specific fields needed for the form
          templateFields: (tpl.fields || []).reduce((acc, field) => {
            if (field && field.name) {
              acc[field.name] = field.defaultValue || '';
            }
            return acc;
          }, {})
        }));
        
        setBrands(brandTemplates);
        setError(null);
      } catch (err) {
        console.error('Error fetching templates:', err);
        if (isMounted) {
          setError({
            message: err.message || 'Failed to load templates',
            details: process.env.NODE_ENV === 'development' ? err.stack : undefined
          });
          setBrands([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    
    fetchTemplates();
    
    return () => {
      isMounted = false;
    };
  }, []);

  return { brands, isLoading, error };
}

/**
 * Component to display available brands in the dashboard
 */
export default function DashboardBrands({ onSelectBrand }) {
  const { brands: availableBrands, isLoading, error } = useAvailableBrands();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              {error.message || 'Failed to load templates. Please try again later.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 gap-3">
      {availableBrands && availableBrands.length > 0 ? (
        availableBrands.map((brand) => (
          <div
            key={brand.id}
            className="aspect-square bg-[var(--accent-text)] rounded-xl flex items-center justify-center p-3 cursor-pointer hover:scale-95 transition-transform duration-300"
            onClick={() => onSelectBrand && onSelectBrand(brand)}
            title={brand.displayName || brand.name}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={brand.logo?.startsWith?.('http') ? brand.logo : 
                     (brand.logo ? `/assets/brand-logos/${brand.logo}` : '/placeholder-logo.png')}
                className="h-12 max-w-full object-contain"
                alt={brand.displayName || brand.name}
                loading="lazy"
                onError={(e) => {
                  console.error('Error loading logo:', brand.logo);
                  e.target.onerror = null;
                  e.target.src = "/placeholder-logo.png";
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-8 text-gray-500">
          No templates available. Please check back later.
        </div>
      )}
    </div>
  );
}

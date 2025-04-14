import strapi from '../lib/strapi';

export const getBrandById = async (brandId) => {
  try {
    const response = await strapi.findOne('brands', brandId, {
      populate: ['logo', 'emailTemplate', 'orderForm'],
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching brand:', error);
    return null;
  }
};

export const getBrandEmailTemplate = async (brandId) => {
  try {
    const response = await strapi.findOne('email-templates', brandId, {
      filters: {
        brand: brandId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching email template:', error);
    return null;
  }
};

export const getBrandOrderForm = async (brandId) => {
  try {
    const response = await strapi.findOne('order-forms', brandId, {
      filters: {
        brand: brandId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching order form:', error);
    return null;
  }
}; 
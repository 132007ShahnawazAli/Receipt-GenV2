import React, { useState } from 'react';

const DynamicOrderForm = ({ formConfig, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field) => {
    const { type, label, name, required, options } = field;

    switch (type) {
      case 'text':
        return (
          <input
            type="text"
            name={name}
            value={formData[name] || ''}
            onChange={(e) => handleInputChange(name, e.target.value)}
            required={required}
            className="w-full p-2 border rounded"
          />
        );
      case 'email':
        return (
          <input
            type="email"
            name={name}
            value={formData[name] || ''}
            onChange={(e) => handleInputChange(name, e.target.value)}
            required={required}
            className="w-full p-2 border rounded"
          />
        );
      case 'select':
        return (
          <select
            name={name}
            value={formData[name] || ''}
            onChange={(e) => handleInputChange(name, e.target.value)}
            required={required}
            className="w-full p-2 border rounded"
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formConfig.fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label className="block text-sm font-medium">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {renderField(field)}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Order
      </button>
    </form>
  );
};

export default DynamicOrderForm; 
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Field Name
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          value={field.name}
                          onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                          placeholder="e.g. customerName"
                          className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--accent-text)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Label
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          value={field.label}
                          onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
                          placeholder="e.g. Customer Name"
                          className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--accent-text)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Type
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <select
                          value={field.type}
                          onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                          className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--accent-text)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50"
                        >
                          <option value="text">Text</option>
                          <option value="number">Number</option>
                          <option value="email">Email</option>
                          <option value="date">Date</option>
                          <option value="select">Select</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Default Value
                        </label>
                        <input
                          type="text"
                          value={field.defaultValue || ''}
                          onChange={(e) => handleFieldChange(index, 'defaultValue', e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--accent-text)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Placeholder
                      </label>
                      <input
                        type="text"
                        value={field.placeholder || ''}
                        onChange={(e) => handleFieldChange(index, 'placeholder', e.target.value)}
                        placeholder="e.g. Enter customer name"
                        className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--accent-text)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50"
                      />
                      <p className="text-sm text-[var(--secondary-text)]">
                        This text will appear as a placeholder in the input field
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`required-${index}`}
                        checked={field.required}
                        onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
                        className="rounded border-[var(--accent-text)]/30 text-[var(--accent-text)] focus:ring-[var(--accent-text)]/50"
                      />
                      <label htmlFor={`required-${index}`} className="text-sm font-medium">
                        Required Field
                      </label>
                    </div> 
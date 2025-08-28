import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown = ({ options, value, onChange, placeholder = "Select option", className = "" }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={`${selectedOption ? 'text-text-primary' : 'text-text-muted'} font-medium`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={`h-4 w-4 text-text-secondary transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-card-border rounded-lg shadow-xl z-50 overflow-hidden">
          <ul className="py-1" role="listbox">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-hover transition-colors duration-150 ${
                    option.value === value 
                      ? 'bg-accent/10 text-accent font-medium' 
                      : 'text-text-primary'
                  }`}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
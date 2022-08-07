type Props = {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  required: boolean;
};

const TextBox = ({ label, placeholder, id, name, type, autoComplete, required }: Props) => {
  return (
    <div>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete} //https://omkz.net/form-autocomplete/
        required={required}
        className='relative block h-8 w-80 rounded-md border border-gray-300 px-3 py-2 text-black  placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextBox;

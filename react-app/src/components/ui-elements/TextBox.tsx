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
        className='w-80 h-8 rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-500  text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextBox;

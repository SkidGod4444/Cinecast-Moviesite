
export const Input = ({ type, placeholder, label, bg , register, name, value, onChange }) => {
    return (
        <div className='mt-8'>
            <label className='text-sm font-medium text-white-700'>{label}</label>
            
                <input
                name={name}
                value={value}
                onChange={onChange}
                {...register}
                    type={type}
                    placeholder={placeholder}
                    className={`${
                        bg ? 'bg-dry' : 'bg-transparent'
                    } block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm`}
                />
            </div>
     

    )
}

export const Select = ({ label, options }) => {
    return (
      <div className='mt-8'>
        <label className='text-sm font-medium text-white-700'>{label}</label>
        <div className='mt-1'>
          <select
            className='block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-dry'
          >
            {options.map((option) => (
              <option key={option._id}>{option.title}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  

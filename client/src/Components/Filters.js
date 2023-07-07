import React from 'react';
import { CategoriesData } from '../Data/CategoriesData';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon, CheckIcon } from '@heroicons/react/solid';
import { TimeData, RatingData, AgelimitData } from '../Data/FilterData';


function Filters(props) {
  const {
    category,
    setCategory,
    time,
    setTime,
    ratings,
    setRatings,
    agelimit,
    setAgelimit,
  } = props?.data;

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData?.length > 0 ? 
      [{ title: 'All Categories' }, ...CategoriesData] : [{ title: 'No Categories Found' }],
    },
    {
      value: agelimit,
      onChange: setAgelimit,
      items: AgelimitData,
    },
    {
      value: time,
      onChange: setTime,
      items: TimeData,
    },
    {
      value: ratings,
      onChange: setRatings,
      items: RatingData,
    },
  ];

  return (
    <div className="m-6 bg-transparent border border-border text-dryGray grid gap-2 rounded p-6 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative mt-1">
          <Listbox.Button className="relative border border-border hover:border-subMain w-60 text-white bg-main rounded-lg shadow-md cursor-default py-4 pl-6 pr-10 text-center text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <SelectorIcon className="w-5 h-5" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-dryGray border border-subMain text-dryGray rounded-md shadow-lg max-h-40 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-subMain text-white' : 'text-main'
                      }`
                    }
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncated ${
                            selected ? 'font-semibold' : 'font-normal'
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default Filters;

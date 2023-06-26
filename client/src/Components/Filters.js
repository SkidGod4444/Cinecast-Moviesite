import React from 'react';
import { CategoriesData } from '../Data/CategoriesData';
import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon, CheckIcon } from '@heroicons/react/solid';

const YearData = [
  { title: 'Sort By Year' },
  { title: '2000 - 2010' },
  { title: '2010 - 2020' },
  { title: '2020 - 2021' },
  { title: '2021 - 2022' },
  { title: '2022 - 2023' },
];

const TimeData = [
  { title: 'Sort By Time' },
  { title: '1 - 2 Hours' },
  { title: '2 - 3 Hours' },
  { title: '3 - 4 Hours' },
  { title: '4 - 5 Hours' },
  { title: '5 - 6 Hours' },
  { title: '6 - 10 Hours' },
  { title: '10 - 20 Hours' },
];

const RatingData = [
  { title: 'Sort By Rating' },
  { title: '1 Stars' },
  { title: '2 Stars' },
  { title: '3 Stars' },
  { title: '4 Stars' },
  { title: '5 Stars' },
];

function Filters() {
  const [category, setCategory] = useState({ title: 'Category' });
  const [year, setYear] = useState(YearData[0]);
  const [time, setTime] = useState(TimeData[0]);
  const [rating, setRating] = useState(RatingData[0]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: time,
      onChange: setTime,
      items: TimeData,
    },
    {
      value: rating,
      onChange: setRating,
      items: RatingData,
    },
  ];

  return (
    <div className="m-6 bg-dry border text-dryGray border-gray-800 grid gap-2 rounded p-6 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative mt-1">
          <Listbox.Button className="relative border border-subMain w-60 text-white bg-main rounded-lg shadow-md cursor-default py-4 pl-6 pr-10 text-center text-xs">
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
                        active ? 'bg-submain text-subMain' : 'text-main'
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

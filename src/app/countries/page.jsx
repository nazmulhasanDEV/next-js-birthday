'use client';

import { useEffect, useState } from 'react';

export default function LocationSelector() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const fetchCountries = async () => {
    const res = await fetch(`https://api-dev.autoby24.ch/api/core/country?limit=all`);
    const data = await res.json();
    console.log(data);
    setCountries(data?.results || []);
  };

  const fetchStates = async (countryName) => {
    setLoadingStates(true);
    const res = await fetch(`https://api-dev.autoby24.ch/api/core/state?country=${countryName}&limit=all`);
    const data = await res.json();
    setStates(data?.results || []);
    setLoadingStates(false);
  };

  const fetchCities = async (stateName) => {
    setLoadingCities(true);
    const res = await fetch(`https://api-dev.autoby24.ch/api/core/city?state=${stateName}&limit=all`);
    const data = await res.json();
    setCities(data?.results || []);
    setLoadingCities(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState('');
    setSelectedCity('');
    setStates([]);
    setCities([]);
    if (country) fetchStates(country);
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity('');
    setCities([]);
    if (state) fetchCities(state);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow space-y-5">
      <h2 className="text-xl font-semibold text-gray-800">Select Your Location</h2>

      {/* Country */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Country</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* State */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
          value={selectedState}
          onChange={handleStateChange}
          disabled={!selectedCountry || loadingStates}
        >
          <option value="">{loadingStates ? 'Loading...' : 'Select State'}</option>
          {states.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState || loadingCities}
        >
          <option value="">{loadingCities ? 'Loading...' : 'Select City'}</option>
          {cities.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

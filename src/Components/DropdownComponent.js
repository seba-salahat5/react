import * as React from 'react';
import { OutlinedInput, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSelect = styled(Select)({
    width: 220,
    height: 50,
    backgroundColor: 'white',
    color: '#111517',
    fontWeight: 600,
    boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)',
    borderRadius: 'px'
});

const regions =
    [
        "No Filter",
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
        "Favourites"
    ];

export default function DropdownComponent({ onFilter }) {
    const [Selectedregion, setSelectedRegion] = React.useState('');

    const handleChange = (event) => {
        setSelectedRegion(event.target.value);
        onFilter(event.target.value);
    };
    return (
        <StyledSelect
            displayEmpty
            value={Selectedregion}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (selected.length === 0) {
                    return "Filter By:";
                }
                return selected;
            }}>
            <MenuItem disabled value=""><em>Filter By:</em></MenuItem>
            {regions.map((region) => (
                <MenuItem key={region} value={region}>
                    {region}
                </MenuItem>
            ))}
        </StyledSelect>
    );
}
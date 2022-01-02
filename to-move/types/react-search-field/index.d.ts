declare module 'react-search-field' {
    import React, { FC } from 'react'

    type SearchFieldProps = {
        className?: string;
        placeholder?: string;
        onChange: (e: any) => void;
        onEnter: (e?: any) => void;
        onSearchClick: (e?: any) => void;
    }

   const SearchField: FC<SearchFieldProps>
}
import { useState } from 'react';

export const useSearchState = () => {
    const [search, setSearch] = useState('');
    return { search, setSearch };
};

export const useLoadingState = () => {
    const [isLoading, setIsLoading] = useState(false);
    return { isLoading, setIsLoading };
};

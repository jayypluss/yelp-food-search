import React, {useState} from 'react';
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../componens/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from '../componens/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
           return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create();

export default SearchScreen;
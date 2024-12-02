"use client"

import React, {useCallback, useEffect, useState} from 'react';
import './../styles/components/_sets.scss';
import Card from './Card';
import ICard from '../interfaces/ICard';
import sushiApi from './../services/sushiApi';
import Button from './Button';

interface SetsProps {
    titleMain: string;
}

const Sets: React.FC<SetsProps> = ({ titleMain }) => {

    const [sets, setSets] = useState<ICard[]>([]); // Карточки на одной странице
    const [errorSets, setErrorSets] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_LIMIT = 5;

    const fetchSets = useCallback(async () => {
        try {
            const data = await sushiApi.getSushiSets(currentPage, PAGE_LIMIT);
            setSets((prevSets) => [...prevSets, ...data]);
        } catch (error) {
            setErrorSets(String(error));
        }
    }, [currentPage, PAGE_LIMIT]);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        fetchSets()
    }, [currentPage]);

    return (
        <>
            <div className="section">
                <div className="wrapper">
                    <div className="sets">
                        <h2 className='sets__title'><b>{titleMain}</b></h2>
                        {errorSets ? // Проверка на ошибки запроса fetchSets()
                            <h3>{errorSets.toString()}</h3>
                            :
                            <div>
                                <div className="sets__container">
                                    {sets.map((set) => (
                                        <Card key={set.id} card={set}/>
                                    ))}
                                </div>
                                <div className="sets__more">
                                    <Button onClick={nextPage} style="button button__login">Ещё</Button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )};

export default Sets;

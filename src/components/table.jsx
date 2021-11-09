import React from 'react';
import { useTable, useSortBy } from 'react-table'

function Table() {
    const listItem = <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.6537 2.1C5.80766 1.83333 6.19256 1.83333 6.34652 2.1L8.25177 5.4C8.40573 5.66667 8.21328 6 7.90536 6H4.09485C3.78693 6 3.59448 5.66667 3.74844 5.4L5.6537 2.1Z" fill="#909090"/>
            <path d="M6.34641 10.9C6.19245 11.1667 5.80755 11.1667 5.65359 10.9L3.74833 7.6C3.59437 7.33333 3.78682 7 4.09474 7L7.90526 7C8.21318 7 8.40563 7.33333 8.25167 7.6L6.34641 10.9Z" fill="#5A60E7"/>
        </svg>;
    const data = React.useMemo(
        () => [
            {
                col1: 'Сезон 2021/2020',
                col2: '15',
                col3: '3',
                col4: '10',
                col5: '13',
                col6: '89.40',
            },
            {
                col1: 'Сезон 2021/2020',
                col2: '12',
                col3: '5',
                col4: '12',
                col5: '17',
                col6: '89.40',
            },
            {
                col1: 'Сезон 2021/2020',
                col2: '9',
                col3: '6',
                col4: '7',
                col5: '13',
                col6: '89.40',
            },
            {
                col1: 'Сезон 2021/2020',
                col2: '17',
                col3: '5',
                col4: '21',
                col5: '26',
                col6: '89.40',
            },
            {
                col1: 'Сезон 2021/2020',
                col2: '16',
                col3: '4',
                col4: '27',
                col5: '31',
                col6: '89.40',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: `Сезон`,
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: `Количество игр`,
                accessor: 'col2',
            },
            {
                Header: `Гол`,
                accessor: 'col3',
            },
            {
                Header: `Пас`,
                accessor: 'col4',
            },
            {
                Header: `Гол+пас`,
                accessor: 'col5',
            },
            {
                Header: `Рейтинг`,
                accessor: 'col6',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        { columns, data },
        useSortBy
    )

    return (
        <table id="table" {...getTableProps()}
               style={{
                   marginTop: '20px',
                   boxShadow: '0px 2px 8px 0px rgba(233, 233, 233, 1)',
                   background: 'white',
                   width: '1015px'
               }}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            style={{
                                height: '40px',
                                textAlign: 'left',
                                verticalAlign: 'bottom',
                                paddingLeft: '20px',
                                color: 'rgba(144, 144, 144, 1)',
                                fontSamily: 'Proxima Nova',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '13px',
                                letterSpacing: '0em',
                                background: 'white'
                            }}
                        >
                            <span>
                            {column.isSorted
                                ? column.isSortedDesc
                                    ? <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.34641 10.9C6.19245 11.1667 5.80755 11.1667 5.65359 10.9L3.74833 7.6C3.59437 7.33333 3.78682 7 4.09474 7L7.90526 7C8.21318 7 8.40563 7.33333 8.25167 7.6L6.34641 10.9Z" fill="#909090"/>
                                        <path d="M5.65359 2.1C5.80755 1.83333 6.19245 1.83333 6.34641 2.1L8.25167 5.4C8.40563 5.66667 8.21318 6 7.90526 6L4.09474 6C3.78682 6 3.59437 5.66667 3.74833 5.4L5.65359 2.1Z" fill="#5A60E7"/>
                                    </svg>
                                    : <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.6537 2.1C5.80766 1.83333 6.19256 1.83333 6.34652 2.1L8.25177 5.4C8.40573 5.66667 8.21328 6 7.90536 6H4.09485C3.78693 6 3.59448 5.66667 3.74844 5.4L5.6537 2.1Z" fill="#909090"/>
                                        <path d="M6.34641 10.9C6.19245 11.1667 5.80755 11.1667 5.65359 10.9L3.74833 7.6C3.59437 7.33333 3.78682 7 4.09474 7L7.90526 7C8.21318 7 8.40563 7.33333 8.25167 7.6L6.34641 10.9Z" fill="#5A60E7"/>
                                    </svg>
                                : ''}
                            </span>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                        style={{
                                        height: '60px',
                                        padding: '10px',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Table;
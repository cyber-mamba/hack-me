import React from "react";
import styled from 'styled-components';

const TableContents = () => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ヘッダー1</th>
                    <th>ヘッダー2</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>データ1</td>
                    <td>データ2</td>
                </tr>
                {/* 他の行 */}
                </tbody>
            </table>
        </div>
    );
};

export default TableContents;
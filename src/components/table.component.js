import React from 'react';
import { Button } from 'fundamental-react/Button';
import { Table } from 'fundamental-react/Table';
import { Panel } from 'fundamental-react/Panel';
import { Icon } from 'fundamental-react/Icon';


export class MyTable extends React.Component {

    render() {
        return (
            <Panel style={{ width: "100%" }}>
                <Panel.Header>
                    <Icon
                        glyph="order"
                        size="l"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <Panel.Head
                        title="Service Orders"
                        description=""
                    />
                    <Panel.Actions>
                        <div style={{ display: "flex" }}>
                            <Button>Add new</Button>
                        </div>
                    </Panel.Actions>
                </Panel.Header >
                <Panel.Body style={{ background: "#edeff0" }}>
                    <Table
                        headers={[
                            'Date Opened',
                            'Assigned Engineer',
                            'Customer',
                            'Customer Contact Phone',
                        ]}
                        tableData={
                            [
                                {
                                    rowData: [
                                        new Intl.DateTimeFormat('en-GB', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        }).format(new Date(new Date().getTime() - 96 * 3600 * 1000)),
                                        'D0111111',
                                        'Nestle',
                                        '+49 9876543210',
                                    ]
                                },
                                {
                                    rowData: [
                                        new Intl.DateTimeFormat('en-GB', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        }).format(new Date(new Date().getTime() - 72 * 3600 * 1000)),
                                        'D067044',
                                        'Nestle',
                                        '+49 9876543210',
                                    ]
                                },
                                {
                                    rowData: [
                                        new Intl.DateTimeFormat('en-GB', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        }).format(new Date(new Date().getTime() - 48 * 3600 * 1000)),
                                        'D067044',
                                        'Volkswagen',
                                        '+49 0123456789',
                                    ]
                                },
                                {
                                    rowData: [
                                        new Intl.DateTimeFormat('en-GB', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        }).format(new Date(new Date().getTime() - 24 * 3600 * 1000)),
                                        'D0111111',
                                        'Volkswagen',
                                        '+49 0123456789',
                                    ]
                                },
                            ]
                        }
                    />
                </Panel.Body>
            </Panel >
        )
    }
}
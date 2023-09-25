"use client";
import React, { Component } from "react";
import Chart from "react-apexcharts";

interface AppState {
    options: {
        chart: {
            id: string;
        };
        xaxis: {
            categories: string[];
        };
        colors: string[];
        plotOptions: {
            bar: {
                horizontal: boolean;
                columnWidth: string;
                endingShape: string;
            };
        };
        dataLabels: {
            enabled: boolean;
            // formatter: (val: any) => string; // Eğer bu işlevi kullanmak isterseniz, tip tanımını güncellemeniz gerekebilir.
        };
        stroke: {
            show: boolean;
            width: number;
            colors: string[];
        };
    };
    series: {
        name: string;
        data: number[];
    }[];
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                },
                xaxis: {
                    categories: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
                },
                colors: ['#7367F0'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: true,
                    // formatter: function (val) {
                    //     return val + "%";
                    // }
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent'],
                },
            },
            series: [
                {
                    name: "Etkileşim",
                    data: [30, 40, 45, 50, 49, 60, 40],
                },
            ],
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="100%"
                height={300}
            />
        );
    }
}

export default App;

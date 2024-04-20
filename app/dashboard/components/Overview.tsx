"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { formatVND } from "@/lib/utils"
import { Fragment, useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


export function Overview({data, isLoading}: {data: any, isLoading: boolean}) {
  return (
    <Fragment>
      {
        isLoading ? (
          <div className="grid grid-cols-6 h-80 gap-x-2 w-full">
            <Skeleton className="col-span-1 w-full h-full" />
            <Skeleton className="col-span-1 w-full h-full" />
            <Skeleton className="col-span-1 w-full h-full" />
            <Skeleton className="col-span-1 w-full h-full" />
            <Skeleton className="col-span-1 w-full h-full" />
            <Skeleton className="col-span-1 w-full h-full" />
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data.sort(
              (a:any, b:any) => a.month - b.month
            )}>
              <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: any) => `${getMonthName(value)}`}
              />
              <YAxis
                yAxisId="left"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: any) => `${formatVND(value)}`}
                className="whitespace-nowrap"
              />
              <Bar yAxisId="left" dataKey="revenue" fill="#16A34A" radius={[4, 4, 0, 0]} />
              <YAxis
                yAxisId="right"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: any) => `${(value)} tickets`}
                stroke="#82ca9d"
              />
              <Bar yAxisId="right" dataKey="ticketQuantity" fill="#0694e6" radius={[4, 4, 0, 0]}/>
              <Tooltip 
              labelFormatter={(value) => `Month: ${getMonthName(value)}`}
              formatter={(value, name, props) => {
                if(name === "revenue") {
                  return [formatVND(+value), "Total In-Month Revenue: "]
                }
                else{
                  return [value, "Total In-Month Ticket Quantity: "]
                }
              }}
              />
            </BarChart>
          </ResponsiveContainer>
        )
      }
    </Fragment>
  )
}

function getMonthName(monthNumber:number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'short',
  });
}
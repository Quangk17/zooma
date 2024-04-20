"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Animal } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { format } from "date-fns"

export const columns: ColumnDef<Animal>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "arrivalDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Arrival Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {format(new Date(row.getValue("arrivalDate")), "dd/MM/yyyy")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of Birth" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {format(new Date(row.getValue("dateOfBirth")), "dd/MM/yyyy")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("description")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "height",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Height" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("height")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "weight",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Weight" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("weight")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "speciesId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="speciesId" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("speciesId")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dietId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="dietId" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("dietId")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "cageId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="cageId" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("cageId")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "trainingPlanId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="trainingPlanId" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("trainingPlanId")}
          </span>
        </div>
      )
    },
  },
]
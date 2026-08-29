"use client";

import React, { useState, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { mainFont } from "@/styles/fonts";

import "ag-grid-community/styles/ag-theme-quartz.css";

import styles from "./DataTable.module.scss";
import { Image } from "react-bootstrap";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomCard from "../CustomCard/CustomCard";

ModuleRegistry.registerModules([AllCommunityModule]);

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const FilterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="21" x2="4" y2="14"></line>
    <line x1="4" y1="10" x2="4" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="3"></line>
    <line x1="20" y1="21" x2="20" y2="16"></line>
    <line x1="20" y1="12" x2="20" y2="3"></line>
    <line x1="1" y1="14" x2="7" y2="14"></line>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="17" y1="16" x2="23" y2="16"></line>
  </svg>
);

const SortIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 15l5 5 5-5"></path>
    <path d="M7 9l5-5 5 5"></path>
  </svg>
);

const DefaultStatusCellRenderer = (params) => {
  if (!params.value) return null;

  let bgColor = "#f1f5f9";
  let color = "#64748b";
  const val = String(params.value).toLowerCase();

  if (val === "active" || val === "completed") {
    bgColor = "#dcfce7"; // green-100
    color = "#15803d"; // green-700
  } else if (val === "draft" || val === "progress") {
    bgColor = "#e0f2fe"; // sky-100
    color = "#0369a1"; // sky-700
  } else if (val === "archived" || val === "cancelled") {
    bgColor = "#f1f5f9"; // slate-100
    color = "#475569"; // slate-600
  }

  return (
    <span
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: "0 12px",
        height: "24px",
        borderRadius: "9999px",
        fontSize: "12px",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
      }}
    >
      {params.value}
    </span>
  );
};

export default function DataTable({
  rows = [],
  columns = [],
  loading = false,
  pagination = true,
  pageSize = 20,
  height = 400,
  selectable = false,
  onRowClicked,
  dropdownFieldName = "leadStatus",
  title,
  actions = [],
  noHead,
  ...rest
}) {
  const [activeTab, setActiveTab] = useState("All");
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const gridRef = useRef(null);

  const dynamicTabs = useMemo(() => {
    const statuses = new Set();
    rows.forEach((row) => {
      if (row[dropdownFieldName]) {
        statuses.add(row[dropdownFieldName]);
      }
    });
    return ["All", ...Array.from(statuses)];
  }, [rows]);

  const defaultColDef = {
    sortable: true,
    filter: false,
    floatingFilter: false,
    resizable: true,
    flex: 1,
    minWidth: 120,
  };

  const filteredRows = useMemo(() => {
    if (!activeTab || activeTab === "All" || activeTab === "+") return rows;
    return rows.filter(
      (r) =>
        r[dropdownFieldName] &&
        String(r[dropdownFieldName]).toLowerCase() === activeTab.toLowerCase(),
    );
  }, [rows, activeTab]);

  const gridColumns = useMemo(() => {
    const finalCols = columns.map((c, index) => {
      const colDef = { ...c };

      if (showFilter) {
        colDef.filter = c.filter ?? true;
        colDef.floatingFilter = false;
      } else {
        colDef.filter = false;
      }

      if (index === 0 && !colDef.cellRenderer) {
        colDef.cellRenderer = (params) => {
          if (params.data?.image) {
            return (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Image
                  src={params.data.image}
                  alt={params.value}
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <span style={{ fontWeight: 500, color: "#334155" }}>
                  {params.value}
                </span>
              </div>
            );
          }
          return params.value;
        };
      }

      const isStatusCol =
        colDef.field?.toLowerCase() === dropdownFieldName ||
        colDef.headerName?.toLowerCase() === dropdownFieldName;
      if (isStatusCol && !colDef.cellRenderer) {
        colDef.cellRenderer = DefaultStatusCellRenderer;
      }

      return colDef;
    });

    if (actions && actions.length > 0) {
      finalCols.push({
        headerName: "Actions",
        field: "actions",
        sortable: false,
        filter: false,
        minWidth: 150,
        cellRenderer: (params) => {
          return (
            <div className={styles.rowActions}>
              {actions.map((action, idx) => (
                <button
                  key={idx}
                  title={action.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (action.onClick) action.onClick(params.data);
                  }}
                  className={styles.rowActionBtn}
                >
                  {action.icon}
                </button>
              ))}
            </div>
          );
        },
      });
    }

    return finalCols;
  }, [columns, showFilter, actions]);

  const handleClearSort = () => {
    if (gridRef.current?.api) {
      gridRef.current.api.applyColumnState({ defaultState: { sort: null } });
    }
  };

  if (noHead) {
    return (
      <div className={`ag-theme-quartz ${styles.table}`} style={{ height }}>
        <AgGridReact
          ref={gridRef}
          rowData={filteredRows}
          columnDefs={gridColumns}
          defaultColDef={defaultColDef}
          loading={loading}
          pagination={pagination}
          paginationPageSize={pageSize}
          rowSelection={selectable ? { mode: "multiRow" } : undefined}
          quickFilterText={searchText}
          animateRows
          suppressCellFocus={true}
          onRowClicked={onRowClicked}
          
          {...rest}
        />
      </div>
    );
  }

  return (
    <div>
      <CustomCard
        head={title}
        noPadding
        leftElement={
          dynamicTabs.length && (
            <CustomSelect
              options={dynamicTabs.map((option) => {
                return {
                  label: option,
                  value: option,
                };
              })}
              onSelect={(d) => setActiveTab(d.value)}
            />
          )
        }
        rightElement={
          <div className={styles.actions}>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoFocus
              />
            )}
            <button
              className={`${styles.actionBtn} ${showSearch ? styles.activeActionBtn : ""}`}
              onClick={() => {
                setShowSearch(!showSearch);
                if (showSearch) setSearchText("");
              }}
              title="Search"
            >
              <SearchIcon />
            </button>
            <button
              className={`${styles.actionBtn} ${showFilter ? styles.activeActionBtn : ""}`}
              onClick={() => setShowFilter(!showFilter)}
              title="Filter"
            >
              <FilterIcon />
            </button>
            <button
              className={styles.actionBtn}
              onClick={handleClearSort}
              title="Clear Sort"
            >
              <SortIcon />
            </button>
          </div>
        }
      >
        <div className={`ag-theme-quartz ${styles.table}`} style={{ height }}>
          <AgGridReact
            ref={gridRef}
            rowData={filteredRows}
            columnDefs={gridColumns}
            defaultColDef={defaultColDef}
            loading={loading}
            pagination={pagination}
            paginationPageSize={pageSize}
            rowSelection={selectable ? { mode: "multiRow" } : undefined}
            quickFilterText={searchText}
            animateRows
            suppressCellFocus={true}
            onRowClicked={onRowClicked}
            {...rest}
          />
        </div>
      </CustomCard>
    </div>
  );
}

import React from 'react';
import type { ComparisonFilter } from '../types/provider';
import { Filter, SlidersHorizontal } from 'lucide-react';
import './ComparisonFilter.css';

interface ComparisonFilterProps {
  filter: ComparisonFilter;
  onFilterChange: (filter: ComparisonFilter) => void;
}

export const ComparisonFilterComponent: React.FC<ComparisonFilterProps> = ({
  filter,
  onFilterChange
}) => {
  const areas = ['全国', '関東', '関西', '東海', '九州', '北海道'];

  return (
    <div className="comparison-filter">
      <div className="filter-header">
        <Filter size={20} />
        <h3>絞り込み条件</h3>
      </div>

      <div className="filter-content">
        <div className="filter-group">
          <label>最大月額料金</label>
          <select
            value={filter.maxPrice || ''}
            onChange={(e) =>
              onFilterChange({
                ...filter,
                maxPrice: e.target.value ? Number(e.target.value) : undefined
              })
            }
          >
            <option value="">指定なし</option>
            <option value="4000">4,000円以下</option>
            <option value="5000">5,000円以下</option>
            <option value="6000">6,000円以下</option>
            <option value="7000">7,000円以下</option>
          </select>
        </div>

        <div className="filter-group">
          <label>提供エリア</label>
          <select
            value={filter.area || ''}
            onChange={(e) =>
              onFilterChange({
                ...filter,
                area: e.target.value || undefined
              })
            }
          >
            <option value="">すべてのエリア</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>並び順</label>
          <select
            value={filter.sortBy}
            onChange={(e) =>
              onFilterChange({
                ...filter,
                sortBy: e.target.value as 'price' | 'speed' | 'rating'
              })
            }
          >
            <option value="rating">評価順</option>
            <option value="price">価格順</option>
            <option value="speed">速度順</option>
          </select>
        </div>

        <button
          className="reset-filter"
          onClick={() =>
            onFilterChange({
              sortBy: 'rating'
            })
          }
        >
          <SlidersHorizontal size={16} />
          フィルターをリセット
        </button>
      </div>
    </div>
  );
};

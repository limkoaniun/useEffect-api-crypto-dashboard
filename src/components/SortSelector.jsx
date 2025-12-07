const SortSelector = ({sortBy, onSortChange}) => {
   return (
       <div className="controls">
           <label htmlFor="sort">Sort By:</label>
           <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} id="sort">
               <option value="market_cap_desc">Market Cap (High To Low)</option>
               <option value="market_cap_asc">Market Cap (Low To High)</option>
               <option value="price_desc">Price (High To Low)</option>
               <option value="price_asc">Price (Low To High)</option>
               <option value="change_desc">24h change (High To Low)</option>
               <option value="change_asc">24h change (Low To High)</option>
           </select>
       </div>
   )
}

export default SortSelector;
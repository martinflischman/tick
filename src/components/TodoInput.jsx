export function TodoInput() {
  return (
    <div className="join">
      <label className="input">
        <input type="text" placeholder="e.g. Water the plants" required />
      </label>
      <button className="btn btn-primary join-item">+ Add</button>
    </div>
  );
}

import { PropTypes } from 'prop-types';

const EditFishForm = ({ fish, updateFish, deleteFish, index }) => {
  const handleChange = (e) => {
    // update that fish
    // 1 take copy of current fish
    const updatedFish = { ...fish, [e.target.name]: e.target.value };
    updateFish(index, updatedFish);
  };

  return (
    <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={fish.name}
      />
      <input
        type="text"
        name="price"
        onChange={handleChange}
        value={fish.price}
      />
      <select name="status" onChange={handleChange} value={fish.status}>
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea name="desc" onChange={handleChange} value={fish.desc} />
      <input
        type="text"
        onChange={handleChange}
        value={fish.image}
        name="image"
      />
      <button type="button" onClick={() => deleteFish(index)}>
        Remove fish
      </button>
    </div>
  );
};

EditFishForm.propTypes = {
  fish: PropTypes.PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    status: PropTypes.string,
  }),
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  index: PropTypes.string,
};

export default EditFishForm;

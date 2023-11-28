/* eslint-disable react/prop-types */

export default function UpdateForm() {
  return (
    <form className='starPage__form'>
      <div className='field'>
        <label htmlFor='heading'>Heading</label>
        <input type='text' name='heading' id='heading' />
      </div>
      <div className='field'>
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='10'></textarea>
      </div>
      <div className='field'>
        <label htmlFor='image'>Image URL</label>
        <input type='url' name='url' id='image' />
      </div>
      <button>Update</button>
    </form>
  );
}

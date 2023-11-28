import { useState } from 'react';
import SingleStar from '../components/SingleStar';
import UpdateForm from '../components/UpdateForm';

export default function StarPage() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  return (
    <div className='singlePage'>
      <SingleStar />
      <button
        className='btn--update'
        onClick={() => setShowUpdateForm((prev) => !prev)}>
        <span className='material-symbols-outlined'>
          {showUpdateForm ? 'cancel' : 'edit_note'}
        </span>
      </button>
      {showUpdateForm && <UpdateForm />}
    </div>
  );
}

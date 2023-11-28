import { useState } from 'react';
import UpdateForm from '../components/UpdateForm';
import SuspendedStar from '../components/SuspendedStar';

export default function StarPage() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  return (
    <div className='singlePage'>
      <SuspendedStar />

      <button
        className='btn--update'
        onClick={() => setShowUpdateForm((prev) => !prev)}>
        <span className='material-symbols-outlined'>
          {showUpdateForm ? 'cancel' : 'edit_note'}
        </span>
      </button>
      <div>{showUpdateForm && <UpdateForm />}</div>
    </div>
  );
}

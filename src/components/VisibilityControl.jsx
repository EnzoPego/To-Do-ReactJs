import React from 'react'

const VisibilityControl = ({isChecked, setShowCompleted, cleanTask}) => {
    
    const handelDelite = () =>{

        if(window.confirm('Are you sure you want to delete it?')){
            cleanTask()
        }
        
    }


  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
        
        <div className='form-check form-switch'>

        <input className='form-check-input'
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)} />
        <label>Show Task Donde</label>

        </div>

        <button onClick={handelDelite} className='btn btn-danger btn-sm'>
            Clear
        </button>

    </div>

  )
}

export default VisibilityControl
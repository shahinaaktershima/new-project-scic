

const Todo = ({task}) => {
    const {name,description,deadline,priority,photo}=task;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="font-bold">Deadline:{deadline}</p>
          <p className="font-bold">Priority:{priority}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">TOdo now</button>
          </div>
        </div>
      </div>
    );
};

export default Todo;
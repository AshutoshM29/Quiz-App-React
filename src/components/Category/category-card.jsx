function CategoryCard(props) {

  return (
    <>
      <div className="card card-vertical">
        <div className="card-head">
          <img
            className="card-vertical-img"
            src="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="category image"
          />
        </div>
        <div className="card-body text-center color-primary">
          <h3> {props.item} </h3>
          <div className="card-vertical-footer">
            <button className="btn btn-primary-solid">
              Play Now
            </button>
            <button title="Add to favotites" class="btn-tom"><i class="fa fa-heart-o"></i></button>
            <button title="Share" class="btn-tom"><i class="fa fa-share-alt"></i></button>
            <button title="More options" class="btn-tom"><i class="fa fa-ellipsis-v"></i></button>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

export { CategoryCard };
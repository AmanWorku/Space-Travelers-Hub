import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dragon from '../components/Dragon';
import { retrieveDragons } from '../redux/dragons/dragons';

function Dragons() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveDragons());
  }, [dispatch]);
  const dragons = useSelector((state) => state.dragonsReducer);
  const renderDragons = (dragonsInfo) => dragonsInfo.map((dragon) => (
    <Dragon
      key={dragon.id}
      description={dragon.description}
      name={dragon.name}
      image={dragon.image}
    />
  ));
  return (
    <div className="container-fluid my-4">{renderDragons(dragons)}</div>
  );
}

export default Dragons;

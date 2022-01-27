import routes from 'routes';
import FetchHelper from 'utils/fetchHelper';

export default {
  index(params) {
    const path = routes.apiV1TasksPath();
    return FetchHelper.get(path, params);
  },

  show(id) {
    const path = routes.apiV1TaskPath(id);
    return FetchHelper.get(path);
  },

  update(id, task = {}) {
    const path = routes.apiV1TaskPath(id);
    return FetchHelper.post(path, { task });
  },

  create(task = {}) {
    const path = routes.apiV1TasksPath();
    return FetchHelper.put(path, { task });
  },

  destroy(id) {
    return FetchHelper.delete(id);
  },
};

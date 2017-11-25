const createMiddleware = (handlers) => store => next => action => {
  const actionHandler = handlers.filter(handler => handler.action === action.type)[0];

  if (actionHandler && actionHandler.beforeHandler) {
    actionHandler.beforeHandler(store, action);
  }
  const result = next(action);

  if (actionHandler && actionHandler.afterHandler) {
    actionHandler.afterHandler(store, action);
  }
  return result;
};

export default createMiddleware;
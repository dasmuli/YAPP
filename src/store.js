export default {
  modules: {
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: [],
        options: {}
      },
      mutations: {
        push(state, page) {
          state.stack.push(page);
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        },
        replace(state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        reset(state, page) {
          state.stack = [page || state.stack[0]];
        },
        options(state, newOptions = {}) {
          state.options = newOptions;
        }
      }
    },
    project: {
      namespaced: true,
      state: {
        selected: {},
      },
      mutations: {
        set(state, p) {
          state.selected = p;
        },
      }
    },
    model: {
      namespaced: true,
      state: {
        selected: {},
      },
      mutations: {
        set(state, p) {
          state.selected = p;
        },
      }
    },
  }
};


# Basic to advance ReactJs App

using -

- sass
- react router
- Firebase
- Redux
- Redux Dev tool
- Redux Logger
- Reselect ( To memorize the state )

First add `Browserrouter` to the `<APP/>`

using `withRouter` to childer. This is a higher order function.
wrap the copmonent with `withRouter`.

\*\*\* NOTES -

> `createSelector` helps to memorize. we use it in the selectors file.

    import { createSelector } from 'reselect';

    const selectUser = (state) => state.user;

    export const selecrCurrentUsre = createSelector(selectUser, (user) => {
      return user.currentUser;
    });

> `createStructuredSelector` it helps to minimize the effort of putign extra writings in fetching state

    import { createStructuredSelector } from 'reselect';

    const mapStateToProps = createStructuredSelector({
      currentUser: selecrCurrentUsre,
      hidden: cartStatus,
    });

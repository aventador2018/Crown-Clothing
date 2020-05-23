import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    /*
    state = {
        loading: true
    };
    */

    // unsubscribeFromSnapshot = null;

    /*
    componentDidMount() {
        
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        fetch('https://firestore.googleapis.com/v1/projects/crwn-db-256bb/databases/(default)/documents/collections')
            .then(response => response.json())
            .then(collection => console.log(collection));

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
       fetchCollectionsStart();
    }

    // const { loading } = this.state;
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFething} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
        </div>
    );
    */
    return (
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer} />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
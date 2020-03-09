import React from 'react'
import {connect} from "react-redux";

import {incrementAsync, decrement, increment} from "../redux/actions";
import Counter from "../components/counter";

export default connect(
    state => ({count : state}),
    {increment, decrement, incrementAsync}
)(Counter)
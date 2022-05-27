import React  from 'react';
import { useLocation, Routes, Route } from "react-router-dom"

import Home from "./Home"
import Project from "./Projects"
import Skills from "./Skills"
import Contact from "./Contacts"
import Education from './Education';
import NotFound from "./NotFound"

const Main = () => {
	const location = useLocation()
	return (
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/contacts" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
	)
}

export default Main
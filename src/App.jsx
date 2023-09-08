import React, { useEffect, useState } from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import JumboTron from './components/JumboTron';
import axios from 'axios';



const App = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());


  return (
    <div>
      <AppHeader></AppHeader>
      <ScrollContainer>
        <ScrollPage>
          <Animator style={{ width: "100%" }} animation={FadeUp}>
            <JumboTron></JumboTron>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div className='container' style={{ marginTop: '6rem' }}>
            <h2 className='ms-2'>Latest stories</h2>
            <div className='d-flex justify-content-between align-items-center row-cols-1 row-cols-sm-2 row-cols-md-4 h-100 flex-wrap'>
              <Animator className='card border-0 text-white my-2 p-2 latest_story' animation={MoveIn(0, 900)}>
                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>Stories</span>
                  <h5 className="card-title text-wrap mt-1">L'Arte del Tatuaggio al Neon e la sua Rinascita Underground</h5>
                  <p className="card-text d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>
              </Animator>
              <Animator className='card border-0 text-white my-2 p-2 latest_story' animation={MoveIn(0, -900)}>
                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>Ideas</span>
                  <h5 className="card-title mt-1">Dovremmo tutti smettere di mangiare?</h5>
                  <p className="card-text d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>
              </Animator>
              <Animator className='card border-0 text-white my-2 p-2 latest_story' animation={MoveIn(0, 900)}>
                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>Places</span>
                  <h5 className="card-title mt-1">Il parco dell'Arcoveggio è un'utopia multiculturale </h5>
                  <p className="card-text d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>
              </Animator>
              <Animator className='card border-0 text-white my-2 p-2 latest_story' animation={MoveIn(0, -900)}>

                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>People</span>
                  <h5 className="card-title mt-1">Gianni Cotti: l'uomo che è nato due volte</h5>
                  <p className="card-text d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>

              </Animator >

            </div >
          </div >
        </ScrollPage >
        <ScrollPage className='bg_tertiary'>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator className='card my-2 p-2' animation={MoveIn(-1000, 0)}>Stories</Animator>
              <Animator className='card my-2 p-2' animation={MoveIn(1000, 0)}>People</Animator>
              <Animator className='card my-2 p-2' animation={MoveOut(1000, 0)}>Places</Animator>
              <Animator className='card my-2 p-2' animation={MoveOut(-1000, 0)}>Ideas</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage className='d-flex align-items-center' style={{ height: '500px' }}>
          <div className='h-50 m-auto d-flex align-items-center'>
            <a href="" className='text-black text-decoration-none'><h2 className='text-center  bg_tertiary p-2'>Newsletter</h2></a>
          </div>
        </ScrollPage>
      </ScrollContainer >
      <AppFooter></AppFooter>
    </div >
  )
}

export default App
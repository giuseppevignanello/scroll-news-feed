import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import JumboTron from './components/JumboTron';

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
        <div className="container">
          <ScrollPage >
            <div className='d-flex justify-content-between gap-2 row-cols-2 row-cols-md-4'>
              <Animator animation={MoveIn(0, 1000)}>
                <div className="card bg-black text-white">
                  <div className="card-body">
                    <span className='bg_tertiary text-black p-1'>Stories</span>
                    <h4 className="card-title text-wrap">Lorem ipsum dolor sit amet consectetur </h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                  </div>
                </div>
              </Animator>
              <Animator animation={MoveIn(0, 1000)}>
                <div className="card bg-black text-white">
                  <div className="card-body">
                    <span className='bg_tertiary text-black p-1'>People</span>
                    <h4 className="card-title text-wrap">Lorem ipsum dolor sit amet consectetur </h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                  </div>
                </div>
              </Animator>
              <Animator animation={MoveIn(0, 1000)}>
                <div className="card bg-black text-white">
                  <div className="card-body">
                    <span className='bg_tertiary text-black p-1'>Places</span>
                    <h4 className="card-title text-wrap">Lorem ipsum dolor sit amet consectetur </h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                  </div>
                </div>
              </Animator>
              <Animator animation={MoveIn(0, 1000)}>
                <div className="card bg-black text-white">
                  <div className="card-body">
                    <span className='bg_tertiary text-black p-1'>Ideas</span>
                    <h4 className="card-title text-wrap">Lorem ipsum dolor sit amet consectetur </h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                  </div>
                </div>
              </Animator>
            </div>
          </ScrollPage>
        </div>
        <ScrollPage className='bg-danger'>
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
      </ScrollContainer>
      <AppFooter></AppFooter>
    </div >
  )
}

export default App
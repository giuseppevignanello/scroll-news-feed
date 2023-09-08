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
        <ScrollPage>
          <div className='container' style={{ marginTop: '10rem' }}>
            <h2 className='ms-2'>Latest stories</h2>
            <div className='d-flex justify-content-between align-items-center row-cols-2 row-cols-md-4 h-100 flex-wrap'>
              <Animator className='card border-0 text-white my-2 p-2 h-25' animation={MoveIn(0, 900)}>
                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>Stories</span>
                  <h4 className="card-title text-wrap mt-1">Lorem ipsum dolor sit amet consectetur </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>
              </Animator>
              <Animator className='card border-0 text-white my-2 p-2 h-25' animation={MoveIn(0, -900)}>
                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>Ideas</span>
                  <h4 className="card-title text-wrap mt-1">Lorem ipsum dolor sit amet consectetur </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>
              </Animator>
              <Animator className='card border-0 text-white my-2 p-2 h-25' animation={MoveIn(0, 900)}>
                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>Places</span>
                  <h4 className="card-title text-wrap mt-1">Lorem ipsum dolor sit amet consectetur </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>
              </Animator>
              <Animator className='card border-0 text-white my-2 p-2 h-25' animation={MoveIn(0, -900)}>

                <div className="card-body bg-black">
                  <span className='bg_tertiary text-black p-1'>People</span>
                  <h4 className="card-title text-wrap mt-1">Lorem ipsum dolor sit amet consectetur </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi distinctio placeat.</p>
                </div>

              </Animator>

            </div>
          </div>
        </ScrollPage>
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
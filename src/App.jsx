import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import AppHeader from './components/AppHeader';

const App = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      <AppHeader></AppHeader>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage className='bg-danger'>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator className='card my-2' animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator className='card my-2' animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
              <Animator className='card my-2' animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator className='card my-2' animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default App
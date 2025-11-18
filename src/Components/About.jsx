import React from 'react'

    import { useNavigate } from 'react-router-dom';

function About() {
        const navigate = useNavigate();
  return (
    
    <div><button onClick={()=>navigate('/home')}>Back to HomePage</button><h2 style={{color:'green'}}>
        The Holy Bible is more than a book—it is <u>God’s heartbeat </u>written in words. <br /><br />
<p>Every page carries His whisper, His guidance, and His unfailing love.
When life feels heavy, its promises lift us.
When our hearts feel empty, its truth fills us.
When we lose direction, its wisdom becomes the light that leads us home.</p>

Reading the Bible isn’t just a habit—it is a lifeline.
It reminds us who we are, whose we are,
and how deeply we are loved. <br /><br />

<p><u> Why Reading the Bible Is Necessary</u></p>
<ul>
<i>
<li>It feeds the soul the way food feeds the body. </li>

<li>It brings peace where the world brings noise.</li>

<li>It strengthens faith when doubts try to weaken us.</li>

<li>It corrects, comforts, heals, and restores.</li>

<li>It teaches us to walk in purpose, not confusion.</li>
<li>It connects us to God’s heart, not just His words.</li>
</i>
</ul>

Reading the Bible daily is like walking hand-in-hand with God—
one verse at a time, one step at a time.</h2></div>
  )
}

export default About
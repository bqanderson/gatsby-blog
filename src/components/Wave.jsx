import React, { useState } from 'react'
import { css } from '@emotion/react'

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`

  return (
    <button
      css={css`
        background: #454254;
        border: none;
        color: #f3ffe7;
        font-size: 1.25rem;
        line-height: 1.5rem;
        padding: 0.75rem 3rem;
        border-radius: 6px 6px 6px 0;

        &:hover {
          background: #1c192e;
          color: #7fff00;
        }
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  )
}

export default Wave

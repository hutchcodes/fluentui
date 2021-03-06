import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const RaiseHandDisabledIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M24,8.5a.51.51,0,0,0-.5-.5.47.47,0,0,0-.35.15l-15,15A.49.49,0,0,0,8,23.5a.51.51,0,0,0,.5.5.49.49,0,0,0,.36-.15L11,21.77a5.77,5.77,0,0,1,.65.93,1.65,1.65,0,0,0,1.09,1.09,8,8,0,0,0,2,.21c1.12,0,2.45-.11,2.89-1.34.06-.17.05-.36.11-.53a11,11,0,0,0,2.26-2.93,2.54,2.54,0,0,1,1.56-1.53c.49-.22.92-.49.92-1.09a1.44,1.44,0,0,0-1.54-1.36,3.08,3.08,0,0,0-1.89.62c-.21.15-.38.36-.6.5.05-.72.1-1.43.16-2.14l5.33-5.34A.49.49,0,0,0,24,8.5Zm-3.15,7.72c.17,0,.62.1.63.32a6.43,6.43,0,0,0-2,1.44,4.06,4.06,0,0,0-.39.78A10.42,10.42,0,0,1,17,21.48c-.22.23-.17.57-.27.83-.27.7-1.41.69-2,.69a6.43,6.43,0,0,1-1.75-.18.7.7,0,0,1-.45-.48,8.47,8.47,0,0,0-.83-1.25l5.9-5.91c0,.72-.11,1.43-.11,2.15a.79.79,0,0,0,.54.24C18.78,17.57,19.63,16.22,20.85,16.22Z" />
        <path d="M9.88,16.92c0,.19,0,.37,0,.56a10.46,10.46,0,0,0,.27,2.29L10.9,19a9.5,9.5,0,0,1-.13-1.5c0-.19,0-.37,0-.56,0-1.11-.1-2.22-.2-3.33,0-.38-.07-.75-.07-1.13s.33-.44.61-.44.43.1.46.41,0,.66.05,1l.09,1.82a7.94,7.94,0,0,0,0,.85c0,.28.18.48.47.48a.49.49,0,0,0,.44-.52c-.09-1.91-.18-3.82-.26-5.73,0-.33.29-.49.59-.49a.5.5,0,0,1,.56.52l.09,4.55a.46.46,0,1,0,.91,0c0-1.52-.08-3-.08-4.57,0-.56-.06-1.3.71-1.3s.64.55.64,1.07c0,1.36-.07,2.73-.13,4.09l.95-.95L16.74,11c0-.42,0-.74.56-.74.29,0,.55.15.55.46,0,.47-.07.94-.1,1.4l1-1a4.56,4.56,0,0,0,0-.51,1.41,1.41,0,0,0-1.41-1.37,1.49,1.49,0,0,0-.62.12A1.4,1.4,0,0,0,15.26,8a1.46,1.46,0,0,0-1.55,1A1.5,1.5,0,0,0,13,8.85a1.37,1.37,0,0,0-1.43,1.4v.87A1.78,1.78,0,0,0,11,11a1.41,1.41,0,0,0-1.42,1.39c0,.43.05.85.08,1.28C9.77,14.77,9.88,15.84,9.88,16.92Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M10.25,16.9c0,.2,0,.4,0,.6a10.67,10.67,0,0,0,.19,2L15.91,14c0-1.49.11-3,.11-4.46,0-.64,0-1.22-.83-1.22s-.85.62-.85,1.26c0,1.71,0,3.42,0,5.12a.35.35,0,0,1-.31.37.34.34,0,0,1-.31-.35l-.09-5A.75.75,0,0,0,12.84,9a.74.74,0,0,0-.81.74c.07,1.88.17,3.76.27,5.65a.34.34,0,0,1-.3.37.33.33,0,0,1-.31-.34c0-.28,0-.57,0-.84-.05-.86-.07-1.72-.14-2.57,0-.45-.25-.62-.69-.62s-.86.2-.86.67c0,.74.11,1.5.17,2.24S10.25,16,10.25,16.9Z" />
        <path d="M18.25,11.63c0-.47.05-.82.07-1.07s0-.29,0-.4c0-.36-.3-.65-.74-.69a.71.71,0,0,0-.85.58l-.21,3.28Z" />
        <path d="M24,8.5a.51.51,0,0,0-.5-.5.47.47,0,0,0-.35.15l-15,15A.49.49,0,0,0,8,23.5a.51.51,0,0,0,.5.5.49.49,0,0,0,.36-.15l2.33-2.33a9.18,9.18,0,0,1,.88,1.32.92.92,0,0,0,.62.65,7.71,7.71,0,0,0,2,.21c.78,0,2.19,0,2.38-1a2,2,0,0,1,.22-.72,11.31,11.31,0,0,0,2.37-3,6.15,6.15,0,0,1,.41-.81A3.88,3.88,0,0,1,21.7,17a.47.47,0,0,0,.35-.43c0-.62-.7-.92-1.22-.92a3.74,3.74,0,0,0-2.22,1.14c-.21.19-.39.41-.6.59l-.2-.27L18,14.7l5.83-5.84A.49.49,0,0,0,24,8.5Z" />
      </g>
    </svg>
  ),
  displayName: 'RaiseHandDisabledIcon',
});

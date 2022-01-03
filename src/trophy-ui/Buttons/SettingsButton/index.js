import React from 'react';
import { SettingOutlined } from '@ant-design/icons'

import './style.scss';

const SettingsButton = () => (
    <button className='settings'>
        <SettingOutlined className='settings-icon' />
    </button>
)

export default SettingsButton;
import React from "react";
import { Text, Link, GeistProvider, CssBaseline } from '@geist-ui/react'
import { Icon } from '@iconify/react';
import slackOutlined from '@iconify/icons-ant-design/slack-outlined';
import mediumOutlined from '@iconify/icons-ant-design/medium-outlined';
import githubOutlined from '@iconify/icons-ant-design/github-outlined';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';

import link from '../constants/syndicai.json'


export default function Footer() {
  return (
    <GeistProvider>
      <CssBaseline />

      <footer className="inset-x-0 bottom-0 pt-12 relative w-full h-40 border-t flex justify-center" style={{backgroundColor: "#fafafa"}}>
        <div className="container max-w-5xl px-3 xl:px-0">
          <div className="w-full mb-2">
            <a href="/">
              <img src={link.syndicai_logo} width="100px" className="mx-auto md:ml-0" alt="syndicai logo" />
            </a>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-6 md:col-span-3 mb-6 md:mb-0 flex flex-wrap text-center justify-center md:justify-start items-center">
              <Text small type="secondary" className="hover:text-black">Copyright © 2020 syndicai. All rights reserved.</Text>
            </div>
            <div className="col-span-6 md:col-span-3 flex text-center justify-center md:justify-end items-center">
                <Link href={link.syndicai_github}><Icon className="w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75" icon={githubOutlined} /></Link>
                <Link href={link.syndicai_slack}><Icon className="w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75" icon={slackOutlined} /></Link>           
                <Link href={link.syndicai_linkedin}><Icon className="w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75" icon={linkedinFilled} /></Link>
                <Link href={link.syndicai_facebook}><Icon className="w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75" icon={facebookFilled} /></Link>
                <Link href={link.syndicai_medium}><Icon className="w-6 h-6 ml-2 mr-0 opacity-50 hover:opacity-75" icon={mediumOutlined} /></Link>
            </div>
          </div>
        </div>
      </footer>

    </GeistProvider>
  );
}

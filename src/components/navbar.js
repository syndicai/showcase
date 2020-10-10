import React from "react";
import { Link, Text, Popover, GeistProvider, CssBaseline } from "@geist-ui/react";
import { MoreHorizontal } from '@geist-ui/react-icons'

import link from '../constants/syndicai.json'


export default function Navbar() {

  const menu_content = () => (
    <div className="w-40 flex flex-wrap justify-end">
      <Popover.Item>
      <Link href={link.syndicai_platform}><p className="my-0" type="secondary">Platform</p></Link>
      </Popover.Item>
      <Popover.Item>
        <Link href={link.syndicai_website}><p className="my-0" type="secondary">Website</p></Link>
      </Popover.Item>
      <Popover.Item>
      <Link href={link.syndicai_enterprise}><p className="my-0" type="secondary">Enterprise</p></Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
      <Link href={"mailto:" + link.syndicai_mail}><p className="my-0" >Contact Us</p></Link>
      </Popover.Item>
    </div>
  )

  return (
    <GeistProvider>
      <CssBaseline />

      <nav className="z-40 sticky top-0 w-full h-16 border-b flex justify-center items-center bg-white">
        <div className="container max-w-5xl px-3 xl:px-0">
          <div className="grid grid-cols-6">
            <div className="col-span-2 flex text-center justify-start items-center">
              <a href="/">
                <img src={link.syndicai_logo} width="110px" className="mx-auto md:ml-0" alt="syndicai logo" />
              </a>
            </div>
            <div className="col-span-4 flex text-center justify-end items-center">
                <a href={link.syndicai_feedback} className="mr-5"><Text type="secondary" className="hover:text-black">Feedback</Text></a>
                <a href={link.syndicai_docs} className="mr-5"><Text type="secondary" className="hover:text-black">Docs</Text></a>
                <Popover content={menu_content} placement={'bottomEnd'} trigger={'hover'}>
                  <MoreHorizontal color="gray" className="cursor-pointer mt-1" />
                </Popover>
            </div>
          </div>
        </div>
      </nav>
    </GeistProvider>
  );
}

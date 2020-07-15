import React from 'react'
import { Pagination as BasePagination } from 'react-bootstrap'
import { Pagination } from 'react-bootstrap'
export default (props) => {
    const { totalCount,pageSize,page} = props
    const nums = (totalCount + pageSize - 1) / pageSize;
    let items = [];
    for(let i=1; i<=nums;i++){
        items.push(
            <BasePagination.Item key={i} active={page === i} onClick={() => props.onPageChange(i)}>
                {i}
            </BasePagination.Item>
        )
    }
    const baseProps = {className: props.className}
    return (<>
    <div className="d-none d-md-block d-lg-block d-xl-block">
    <Pagination {...baseProps}>{items}</Pagination>
    </div>
    <div className="d-none d-block d-sm-block d-md-none">
    <Pagination {...baseProps}>
        <BasePagination.Item disabled={page === 1} onClick={() => props.onPageChange(page - 1)}>上一页</BasePagination.Item>
        <BasePagination.Item disabled={page === pageSize} onClick={() => props.onPageChange(page + 1)}>下一页</BasePagination.Item>
    </Pagination>
    </div>
    </>
    )
}
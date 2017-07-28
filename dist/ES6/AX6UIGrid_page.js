import U from "./AX6Util";
import mustache from "./AX6Mustache";

const onclickPageMove = function (_act) {
    const callback = function (_pageNo) {
        if (this.page.currentPage != _pageNo) {
            this.page.selectPage = _pageNo;
            if (this.config.page.onChange) {
                this.config.page.onChange.call({
                    self: this,
                    page: this.page,
                    data: this.data
                });
            }
        }
    };
    const processor = {
        "first": function () {
            callback.call(this, 0);
        },
        "prev": function () {
            let pageNo = this.page.currentPage - 1;
            if (pageNo < 0) pageNo = 0;
            callback.call(this, pageNo);
        },
        "next": function () {
            let pageNo = this.page.currentPage + 1;
            if (pageNo > this.page.totalPages - 1) pageNo = this.page.totalPages - 1;
            callback.call(this, pageNo);
        },
        "last": function () {
            callback.call(this, this.page.totalPages - 1);
        }
    };

    if (_act in processor) {
        processor[_act].call(this);
    } else {
        callback.call(this, _act - 1);
    }
};

const navigationUpdate = function () {
    let self = this;
    if (this.page) {
        let page = {
            hasPage: false,
            currentPage: this.page.currentPage,
            pageSize: this.page.pageSize,
            totalElements: this.page.totalElements,
            totalPages: this.page.totalPages,
            firstIcon: this.config.page.firstIcon,
            prevIcon: this.config.page.prevIcon || "«",
            nextIcon: this.config.page.nextIcon || "»",
            lastIcon: this.config.page.lastIcon
        };
        let navigationItemCount = this.config.page.navigationItemCount;

        page["@paging"] = function () {
            let returns = [],
                startI,
                endI;

            startI = page.currentPage - Math.floor(navigationItemCount / 2);
            if (startI < 0) startI = 0;
            endI = page.currentPage + navigationItemCount;
            if (endI > page.totalPages) endI = page.totalPages;

            if (endI - startI > navigationItemCount) {
                endI = startI + navigationItemCount;
            }

            if (endI - startI < navigationItemCount) {
                startI = endI - navigationItemCount;
            }
            if (startI < 0) startI = 0;

            for (let p = startI, l = endI; p < l; p++) {
                returns.push({ 'pageNo': p + 1, 'selected': page.currentPage == p });
            }
            return returns;
        }();

        if (page["@paging"].length > 0) {
            page.hasPage = true;
        }

        this.$["page"]["navigation"].html(mustache.render(this.__tmpl.page_navigation.call(this), page));
        this.$["page"]["navigation"].find("[data-ax6grid-page-move]").on("click", function () {
            onclickPageMove.call(self, this.getAttribute("data-ax6grid-page-move"));
        });
    } else {
        this.$["page"]["navigation"].empty();
    }
};

const statusUpdate = function () {
    if (!this.config.page.statusDisplay) {
        return;
    }

    let fromRowIndex = this.xvar.virtualPaintStartRowIndex;
    let toRowIndex = this.xvar.virtualPaintStartRowIndex + this.xvar.virtualPaintRowCount;
    let totalElements = this.page && this.page.totalElements ? this.page.totalElements : false;

    if (toRowIndex > totalElements) {
        toRowIndex = totalElements;
    }

    this.$["page"]["status"].html(mustache.render(this.__tmpl.page_status.call(this), {
        fromRowIndex: U.number(fromRowIndex + 1, { "money": true }),
        toRowIndex: U.number(toRowIndex, { "money": true }),
        totalElements: totalElements ? U.number(totalElements, { "money": true }) : false,
        dataRealRowCount: this.xvar.dataRowCount !== this.xvar.dataRealRowCount ? U.number(this.xvar.dataRealRowCount, { "money": true }) : false,
        dataRowCount: U.number(this.xvar.dataRowCount, { "money": true }),
        progress: this.appendProgress ? this.config.appendProgressIcon : ""
    }));
};

export default {
    navigationUpdate: navigationUpdate,
    statusUpdate: statusUpdate
};
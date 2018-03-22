import * as _ from 'lodash';
import { MapDom } from '../map-dom';
import { Common } from '../../common';
import { Constants } from '../../constants';
export class CPInit {

    private element: any;
    private map: MapDom;
    private attribute;

    constructor(_element: HTMLElement, _map: MapDom) {
        Common.getScope(_element).$on('$onInit', () => {
            this.element = _element;
            this.map = _map;
            this.attribute = Common.getAttributeCpInit(this.element);
            if(!this.attribute) {
                throw `syntax error ${Constants.INIT_ATTRIBUTE_NAME} expected arguments`
            }
            this.init();
        });
    }

    init() {
        this.attribute = this.attribute.replace(/ /g, '');
        Common.executeFunctionCallback(this.element, this.attribute);
    }
}
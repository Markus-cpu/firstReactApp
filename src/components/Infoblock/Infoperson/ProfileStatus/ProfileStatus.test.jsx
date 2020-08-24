import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component:", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'Markus-cpu!!!'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Markus-cpu!!!");
    });
    test("status  after created should be displayed", () => {
        const component = create(<ProfileStatus status={'Markus-cpu!!!'} />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span).not.toBeNull();
    });
    test("status  after created should be span", () => {
        const component = create(<ProfileStatus status={'Markus-cpu!!!'} />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.innerText).toBe();
    });
    test("status  after created should be input", () => {
        const component = create(<ProfileStatus status={'Markus-cpu!!!'} />);
        const instance = component.root;
        expect(()=> {
            const input = instance.findByType('input');
        }).toThrow();
    });
    test("Status  after created should be <span>", () => {
        const component = create(<ProfileStatus status={'Markus-cpu!!!'} />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).toBe('Markus-cpu!!!');
    });
    test("instead of span, an input should appear", () => {
        const component = create(<ProfileStatus status={'Markus-cpu!!!'} />);
        const instance = component.root;
        const span = instance.findByType('span');
        span.props.onDoubleClick();//иммитация клика по кнопке
        const input = instance.findByType('input');
        expect(input.props.value).toBe('Markus-cpu!!!');
    });
    test("СallBack should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'Markus-cpu!!!'} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

describe("", ()=> {

})